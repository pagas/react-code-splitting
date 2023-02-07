# Code Splitting




## Dynamic import

The import(module) expression loads the module and returns a promise that 
resolves into a module object that contains all its exports. It can be called
from any place in the code.


```js
import("./math").then(math => {
    console.log(math.add(16, 26));
});
```

### Reminder
import/export statements are static. 
- They are very simple and strict and is not a function.
- module path can only be primitive string, not dynamic, not function

https://javascript.info/modules-dynamic-imports 



## Lazy component loading

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
