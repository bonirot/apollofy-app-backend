"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlist_controllers_1 = require("../controllers/playlist.controllers");
const playlistRoutes = (0, express_1.Router)();
playlistRoutes.get("/", playlist_controllers_1.getAllPlaylists);
playlistRoutes.post("/:userId", playlist_controllers_1.createPlaylist);
playlistRoutes.patch("/:playListId", playlist_controllers_1.updatePlaylist);
playlistRoutes.delete("/:playListId", playlist_controllers_1.deletePlaylist);
exports.default = playlistRoutes;
