# Basic Haproxy / load-balancer template  

## Sourced [here](https://www.youtube.com/watch?v=9sAg7RooEDc)

A very basic haproxy-based microservice-ish example / template  

More about Haproxy [here](https://www.haproxy.org/)

To install, 
```  
mkdir project-folder-of-your-choice  
cd project-folder-of-your-choice  
cd app  
npm i  
```

After installing (cf. [commands.txt](./commands.txt)):
```
docker build -t nodeapp .
docker-compose up 
```
