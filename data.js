var APP_DATA = {
  "scenes": [
    {
      "id": "0-londom_portal",
      "name": "londom_portal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5000911244901687,
        "pitch": 0.0816774237924669,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-grat3b",
      "name": "grat3b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.126421027903101,
        "pitch": -0.6954316158205831,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": -3.11447716001965,
          "pitch": 0.2900875257016988,
          "rotation": 0,
          "target": "2-grat_portals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-grat_portals",
      "name": "grat_portals",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.04250054125228786,
        "pitch": 0.07629350383605882,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
