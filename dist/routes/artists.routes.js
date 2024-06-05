"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artists_controllers_1 = require("../controllers/artists.controllers");
const artistsRoutes = (0, express_1.Router)();
artistsRoutes.get('/', artists_controllers_1.getAllArtists);
artistsRoutes.post('/', artists_controllers_1.createArtist);
artistsRoutes.patch('/:artistId', artists_controllers_1.updateArtist);
artistsRoutes.delete('/:artistId', artists_controllers_1.deleteArtist);
exports.default = artistsRoutes;
