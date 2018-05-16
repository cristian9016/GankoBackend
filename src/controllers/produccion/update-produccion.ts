import { ProduccionService } from '../../services/produccion-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';
import { Produccion } from '../../services/models/produccion';


class ResponseProduccion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}
export function updateProduccion(req, res: Response, next) {
    let produccion: Produccion = req.body;
    let idProduccion = req.params.idProduccion;
    ProduccionService.instance.update(idProduccion, produccion)
        .then(data => {
            res.send(new ResponseProduccion(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseProduccion(null, null, err));
        })
}