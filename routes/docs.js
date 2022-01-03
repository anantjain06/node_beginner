const express = require("express");

const router = express.Router();

module.exports = () => {
    router.get("/", async (request, response, next) => {
        try {
            return response.render("layout", {
                pageTitle: "Portfolio Project",
                template: "docs",
            });
        } catch (err) {
            return next(err);
        }
    });
    return router;
};