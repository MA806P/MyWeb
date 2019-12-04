//
//  main.m
//  server
//
//  Created by MA806P on 2019/12/4.
//  Copyright © 2019 myz. All rights reserved.
//

#import <Foundation/Foundation.h>

#include <sys/socket.h>
#include <netinet/in.h>
// 端口号
#define PORT 3002


static inline NSString *ResponseForBody(NSObject *obj) {
    NSString *resJson;
    NSString *contentType = @"application/json";
    if ([obj isKindOfClass:[NSString class]]) {
        resJson = (NSString *)obj;
        contentType = @"text/html; charset=utf-8";
    } else {
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:obj options:NSJSONWritingPrettyPrinted error: nil];
        resJson = [[NSString alloc]initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
    
    NSString *res = resJson;

    NSData *resData = [res dataUsingEncoding:NSUTF8StringEncoding];
    NSString *statusLine = @"HTTP/1.1 200 OK";
    NSMutableDictionary *headerDict = [NSMutableDictionary dictionary];
    [headerDict setObject:contentType forKey:@"Content-Type"];
    [headerDict setObject:@(resData.length).stringValue forKey:@"Content-Length"];
        
    NSMutableString *response = [NSMutableString  string];
    [response appendString:statusLine];
    [response appendString:@"\n"];
    [headerDict enumerateKeysAndObjectsUsingBlock:^(NSString *  _Nonnull key, NSString *  _Nonnull obj, BOOL * _Nonnull stop) {
        NSString *headerRaw = [NSString stringWithFormat:@"%@: %@\n",key, obj];
        [response appendString:headerRaw];
    }];
    [response appendString:@"\n"];
    [response appendString:res];
    return response;
}


// 返回是 JSON 数据
static inline NSString *JSONRes() {
    NSDictionary *resDict = @{
        @"code": @"201",
        @"msg": @"response",
        @"data": @[@"wsy", @"lefex"]
    };
    return ResponseForBody(resDict);
}

// 返回 HTML
static inline NSString *HTMLRes() {
    NSString *html =  @"<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Socket</title></head><body><h1>I am a socket王素燕</h1></body></html>";
    return ResponseForBody(html);
}


int server() {
    const char *response = [HTMLRes() UTF8String];
    // creating socket
    int socket_id = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (socket_id < 0) {
        printf("create socket error \n");
        exit(EXIT_FAILURE);
    }
    // create address
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons( PORT );
    // alloc memory
    memset(address.sin_zero, '\0', sizeof address.sin_zero);
    // bind address
    if (bind(socket_id, (struct sockaddr *)&address, sizeof(address)) < 0){
        printf("bind error \n");
        exit(EXIT_FAILURE);
    }
    // listen
    if (listen(socket_id, 10) < 0) {
        printf("linten error \n");
        exit(EXIT_FAILURE);
    }
    while(1) {
        printf("waiting for new connection \n");
        // wait socket to connect
        int new_socket = accept(socket_id, (struct sockaddr *)&address, (socklen_t*)&addrlen);
        if (new_socket < 0) {
            perror("accept error \n");
            exit(EXIT_FAILURE);
        }
        // read data from new socket
        char buffer[30000] = {0};
        read(new_socket , buffer, 30000);
        printf("receive client(%d) message -------------------\n", new_socket);
        printf("%s\n",buffer );
        // write data to new socket
        write(new_socket , response , strlen(response));
        // close socket
        close(new_socket);
    }
    return 0;
}


int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
        
        server();
    }
    return 0;
}
