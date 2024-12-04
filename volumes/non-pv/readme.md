# Emphimeral Storage Example

## Create redis pod with `emptyDir` volume type.
```sh
touch pod.yaml
```
## Provision pod to the cluster
```sh
kubectl apply -f pod.yaml
```
## Exec into in the pod and a new file in /data/redis
```sh 
kubectl exec -it pods/redis-pod -- bash
cd /data/redis
echo "hello world" > hello.txt
```

## Stop the running container in the pod
```sh
apt-get update 
apt-get install procps -y
ps -ef | grep redis
pkill redis
```
After the container proccess is killed, kubelet restarts the container, it will mount the volume and the file will be there.

## Check if file still exists
```sh
kubectl exec -it pods/redis-pod -- sh
ls /data/redis
cat /data/redis/hello.txt
```

## Delete the pod
```sh
kubectl delete pod redis-pod
```