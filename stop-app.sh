#!/bin/bash

# Delete k8s manifests in the namespace
kubectl delete -f deployment.yaml -n my-app
kubectl delete -f statefulset.yaml -n my-app
kubectl delete -f service.yaml -n my-app
kubectl delete -f namespace.yaml
