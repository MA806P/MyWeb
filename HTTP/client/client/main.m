//
//  main.m
//  client
//
//  Created by MA806P on 2019/12/4.
//  Copyright © 2019 myz. All rights reserved.
//

#import <Foundation/Foundation.h>

#include <sys/socket.h>
#include <netinet/in.h>
#define PORT 3002

static inline NSString *RequestString() {
    NSString *requestLine = @"POST /bauhinia/v1/class/purchase/info HTTP/1.1";
    NSDictionary *headerDict = @{
        @"Host": @"entree.get.com",
        @"Accept": @"json",
        @"Accept-Encoding": @"gzip, deflate, br",
        @"Content-Length": @"45",
        @"User-Agent": @"LuoJiFMIOS/7.5.0 (iPhone; iOS 13.2.2; Scale/2.00)",
        @"Cookie": @"acw_tc=276aede015; aliyungf_tc=AQAFUr/nbWX",
        @"Accept-Language": @"zh-Hans-CN;q=1, en-CN;q=0.9",
        @"Connection": @"keep-alive",
        @"Content-Type": @"application/x-www-form-urlencoded"
    };
    NSDictionary *bodyDict = @{
        @"userid": @"123",
        @"class_id": @"lefex"
    };
    
    NSMutableString *request = [NSMutableString string];
    [request appendFormat:@"%@\n", requestLine];
    [headerDict enumerateKeysAndObjectsUsingBlock:^(NSString *key, NSString *obj, BOOL * _Nonnull stop) {
        NSString *raw = [NSString stringWithFormat:@"%@: %@\n", key, obj];
        [request appendString:raw];
    }];
    
    NSMutableArray *bodies = [NSMutableArray array];
    [bodyDict enumerateKeysAndObjectsUsingBlock:^(NSString *key, NSString *obj, BOOL * _Nonnull stop) {
        NSString *raw = [NSString stringWithFormat:@"%@=%@", key, obj];
        [bodies addObject:raw];
    }];
    
    if([bodies count] > 0) {
        [request appendString:@"\n"];
        [request appendString:[bodies componentsJoinedByString:@"&"]];
    }
    
    return request;
}



static inline void createRequestSocket() {
    const char *request = [RequestString() UTF8String];
    // create socket
    int socket_id = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (socket_id < 0) {
        printf("create error \n");
        return;
    }
    struct sockaddr_in serv_addr;
    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(PORT);
    // connect to server
    if (connect(socket_id, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
        printf("connect error \n");
        return;
    }
    // send request to server
    send(socket_id, request, strlen(request), 0);
    char buffer[3000] = {0};
    // read response from server
    read(socket_id, buffer, 3000);
    printf("receive response:\n %s\n\n", buffer);
}


int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
        
        createRequestSocket();
    }
    return 0;
}
