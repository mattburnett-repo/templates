# Basic Haproxy / load-balancer template  

## Sourced [here](https://www.youtube.com/watch?v=9sAg7RooEDc)

A very basic haproxy-based microservice-ish example / template.  

It uses haproxy to enable basic round-robin load-balancing.  

More about haproxy [here](https://www.haproxy.org/).  

To install, 
```  
mkdir project-folder-of-your-choice  
cd project-folder-of-your-choice

<<clone this repo / branch with a '.' at the end. Refer to README.md in main branch for how to clone specific branch.>>

cd app  
npm i  
```

After installing (cf. [commands.txt](./commands.txt)):
```
docker build -t nodeapp .
docker-compose up 
```
