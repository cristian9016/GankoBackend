import { AlimentacionService } from '../../services/alimentacion-service';
import { Alimentacion } from "../../services/models/alimentacion";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseAlimentacion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteAlimentacion(req, res: Response, next) {
    AlimentacionService.instance.delete(req.params.idAlimentacion)
        .then(data => {
            res.send(new ResponseAlimentacion(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseAlimentacion(null, null, err));
        })
}