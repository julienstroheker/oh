from prometheus_client import start_http_server, Summary, Gauge
from mcrcon import MCRcon 
import random
import time
import os

PLAYERS_ONLINE = Gauge('minecraft_players', 'Current players connected')

def fetch_users_online():
   with MCRcon(os.environ['MC_SERVER'], os.environ['MC_PASSWORD']) as mcr:
      resp = mcr.command("/list")
      split = resp.split(" ")
      if split[2] == '0':
          PLAYERS_ONLINE.set(split[2])
      else:
          players = split[2].split("/")
          PLAYERS_ONLINE.set(players[0])

if __name__ == '__main__':
    start_http_server(8000)
    while True:
        time.sleep(5)
        fetch_users_online()