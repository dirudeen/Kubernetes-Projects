# 🚀Excited to share my recent project where I efficiently deployed a static application onto a Kubernetes cluster using Helm! 🎉



This project involved deploying a static site using the blazing fast Bun JS runtime, leveraging the power of Helm charts to streamline the deployment and management of the application within the Kubernetes environment.

[Github Project Link](https://github.com/dirudeen/Kubernetes-Projects/tree/main/helm)



## 🔧 Key Highlights:



- **Helm Charts**: Utilized Helm to package and deploy the application onto Kubernetes, simplifying installation, upgrades, and configuration management.  This included defining several key resources in my Helm chart:

     - **Deployment**:  The Deployment resource managed the application's lifecycle, ensuring the desired number of replicas were always running.



    - **Service Account**: To interact with the Kubernetes API, I defined a dedicated Service Account, granting the application the necessary permissions for its operation.



    - **Service**: A Service was used to expose my application internally within the cluster, allowing other services to communicate with it.



    - **Ingress**:  Using the nginx ingress controller to make the application accessible using a domain name, I utilized an Ingress resource, configuring routing rules and editing hosts file to mimic the domain name resolution.



- **Scalability**: Configured the application to run with multiple replicas, ensuring high availability and a seamless experience even with increased traffic.



- **Customizable Configurations**: Took advantage of Helm's templating engine to create a flexible configuration, enabling effortless customization of application settings, such as ingress rules and service types.



By harnessing the orchestration power of Kubernetes and the ease of management provided by Helm, this project demonstrates a modern and efficient approach to deploying static websites. It highlights the effectiveness of these technologies in building and managing performant and scalable web applications. Looking forward to exploring more possibilities with Kubernetes and Helm in future projects! 🌟



#Kubernetes #Helm #DevOps #CloudComputing #Scalability #WebDevelopment #TechInnovation

![webpage](https://raw.githubusercontent.com/dirudeen/Kubernetes-Projects/refs/heads/main/helm/live-site.png)

![resourses](https://raw.githubusercontent.com/dirudeen/Kubernetes-Projects/refs/heads/main/helm/running-resources.png)

![helm-values](https://raw.githubusercontent.com/dirudeen/Kubernetes-Projects/refs/heads/main/helm/values.png)