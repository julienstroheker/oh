#!/bin/bash# 
while :
do
   echo "Bots autoscale . . . Running"
	echo "Press [CTRL+C] to stop.."
	REPLICAS=$((1 + RANDOM % 20))
   echo Scaling to $REPLICAS
   kubectl scale deploy mc-bot --replicas $REPLICAS
   sleep 60
done