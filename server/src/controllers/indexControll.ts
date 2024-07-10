import { Request, Response } from "express"

const renderIndex = (req: Request, res: Response):void => {
    res.render("index", { layout: "main", title: "Conheça João Vitor" });
};

export { renderIndex };