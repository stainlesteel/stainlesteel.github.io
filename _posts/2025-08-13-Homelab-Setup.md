--- 
layout: blog
title: My Homelab Setup
description: Version 2!
category: Linux
---
### Message
Unfortunately, I haven't been able to have more posts on this blog, not for a serious reason, I forgot. However, with the switch to Jekyll (because it's on GH Pages) there should (maybe) be more because it's easier to edit Markdown than pure H*ML.
### What?
On this site, there are some mentions of homelabbing which, if you don't know, is using a compputer to run webapps, normal apps, or whatever 24/7. For some people, it can also be a hobby where you spend ludicrous amounts of time and money on Hardware to either use 1/24 of its resources on software, or alL of it. (see [this video]("https://youtu.be/l9yY_VWCWlM?si=6KUfOfmQk7cR4-n9")). 
### Why? 
Doing is better than not doing.
### The Setup (Hardware)
This section is not much of importance.
The hardware is just one thing: a Dell Laptop, specifically the Dell Inspiron 3358. It's not good, but it can run 15 Docker containers, so it's good.
Coming at a whopping 2 cores, 4 gigabytes of ram, and a Terabyte of storage, it is about the minimum in homelabbing if you really want more than 5 services.
Other than that, there's nothing to mention. It's basic e-waste hardware that is fun to mess around with in Linux.
### The Setup (Software)
There is no interesting Proxmox, TRUEnas, or Unraid setup running here. It was Ubuntu (Gnome!) then Debian, and then headless Debian.
As for services, I just did bare metal installs for everything, then I stopped being insanse, and used CasaOS, which is just a collection of docker containers that allow you to manage the filesystem, manage the entire system over SSH,  manage Docker containers easily, with caveats (It's just Yacht.), and manage Samba for you (literally, any edits to the pre-configured configuration will be deleted). 
If you didn't know, Docker is just a way to take a Virtual Machine, run an app on it with all of its dependencies, make it easier to interact with the host machine (for ports, or volumes) and also make it easy to configure with docker compose (you make a yml, or rather steal it from GitHub), run a command and Docker does it all for you.
TL;DR, It fixes the issue of 'It only works on my machine' and proompts the issue of 'Nothing works on any of our machines', as for Kubernetes, I don't know it enough, but from what I've heard, it lets you not have to dick around with Docker, and instead dick around with Kubernetes.

Here is a small list of key: value pairs showing my Docker containers along with a bleak explanation:

- Portainer: Manages docker containers
- Filebrowser: Manages files probably
- Glance: Take a GLANCE at your server
- 2 discord bots: because the cloud options are either pay for a VPS, docker container service, or those annoying Discord bot hosting services that need you to log in and do something every day.
- Pihole: Looks at DNS and beats the requests it doesn't like
- Cloudflared: Because DNS should be secured always
- ytmusicscrobbler: supposed to scrobble ytm songs to last.fm, most times it doesn't work (because you need to deal with XHR requests), and when it does, it'll break within 8-30 days.
- Jellyfin: Not fish, but a media server
- Jellyseerr: Request media
- Prowlarr: Tiger that loves torrent indexers
- Radarr: Talks to tiger for illicit movies
- Sonarr: Talks to tiger for illicit shows
- Qbittorrent: Tiger's dealer
- Gluetun: Protects Tiger's dealer
- Duplicati: spies and copies the content of the Docker containers above and shares it to Backblaze (major league data hoarder)

This is NOT my full setup, but my previous home server (on the same hardware) experienced severe corruption, and this current one is completely new, with the exception of some Backblaze B3 backups.
### "I want to do this!"
I can't help you with that (I think), your best resources are YouTube, r/homelab/r/selfhosted, and AI (with extreme caution!)


TL;DR: Linux is fun until it isn't.