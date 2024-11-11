# Kubernetes Network Policy Project

## Overview
This project involves setting up a Kubernetes environment with network policies to manage the communication between different components of a web application. The application consists of frontend, backend, and database components, each deployed as separate Kubernetes resources.

## Project Structure

### 1. Frontend Deployment and Service
- **Deployment**: A frontend deployment using the `nginx:latest` image.
- **Service**: A service to expose the frontend deployment on port 80.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: nginx:latest
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 80
```

### 2. Backend Deployment
- **Deployment**: A backend deployment using the `nginx:latest` image.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: nginx:latest
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
```

### 3. Database Pod
- **Pod**: A MySQL database pod with a root password set as an environment variable.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mysql
  labels:
    name: mysql
spec:
  containers:
  - name: mysql
    image: mysql
    ports:
      - containerPort: 3306
    env:
      - name: MYSQL_ROOT_PASSWORD
        value: my-secret
```

## Network Policies
- Implemented network policies to control the traffic between the frontend, backend, and database components. (Note: Specific network policy configurations were not provided in the context.)

## Conclusion
This project demonstrates the setup of a basic Kubernetes environment with a focus on deploying a multi-component application and managing network traffic using network policies. The components include a frontend, backend, and a database, each configured with appropriate Kubernetes resources.