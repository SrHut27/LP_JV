import { Request, Response } from "express"

// Renderizar IndexPage:

const renderIndex = (req: Request, res: Response):void => {
    res.render("index");
};

export { renderIndex }