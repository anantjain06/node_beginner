const express = require("express");

const router = express.Router();

module.exports = params => {
    const {
        projectService
    } = params;

    router.get("/", async (request, response, next) => {
        try {
            const project = await projectService.getList();
            return response.render("layout", {
                pageTitle: "Portfolio",
                template: "project",
                project
            });
        } catch (err) {
            return next(err);
        }
    });

    router.get("/:topic", async (request, response, next) => {
        try {
            const project = await projectService.getProject(request.params.topic);
            const artwork = await projectService.getArtworkForProject(request.params.topic);
            return response.render("layout", {
                pageTitle: "Project",
                template: "project-detail",
                project,
                artwork,
            });
        } catch (err) {
            return next(err);
        }
    });

    return router;
};