Q1- Explain why do we want to sometimes to use setImmediate instead of using setTimeout ?
A1- actually, it depends on the situation that I am in, what I need from my code to do.
Cause using setTimeout will put the call back function in timer phase and setImmediate will be in check phase so the execution order of set Timeout usually before setImmediate.

Q2- Explain the difference between process.nextTick and setImmediate?
A2- process.nextTick is not part of the event loop , it adds the callback into the nextTick queue and that queue has execution priority over the event loop queue.  
setImmediate schedules a callback to run at check phase of the event loop

Q3- Name 10 modules that node provides by default  
A3- Dns, http,http2,http,os,url,proxy,module,domain,global,process,console,__dirname,__filename
