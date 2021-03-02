import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";
import { NEWDB } from "../db/NEWDB";

export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .get("/:id", this.getOne)
            .delete("/:id", this.delete)
            .put("/:id", this.edit)
    }
    async getOne(req, res, next) {
        try {
            res.send(burgersService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async getAll(req, res, next) {
        try {
            const burgers = burgersService.getAll()
            res.send(burgers);

        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let newBurger = req.body
            const burger = burgersService.create(newBurger)
            res.send("your foods ready dawg")
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id
            burgersService.delete(id)
            res.send("burger mf destroyed son")
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let editedBurger = req.body
            const burger = burgersService.edit(editedBurger, req.params.id)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}