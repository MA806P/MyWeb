const sharePropertyDefinition = {
  enumerable: true,
  configurable: true
};

export default function proxy(target, temp, key) {
  sharePropertyDefinition.get = function proxyGetter() {
    return tmp[key];
  };

  sharePropertyDefinition.set = function proxySetter(val) {
    temp[key] = val;
    if (!window.isUpdatingChildComponent) {
      console.error(`不可以直接更改: ${key}`);
    }
    window.isUpdatingChildComponent = false;
  };

  Object.defineProperty(target, key, sharePropertyDefinition);
}
