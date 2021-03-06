import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import user from './routes/user';
import bovino from './routes/bovino';
import alimentacion from './routes/alimentacion';
import ceba from './routes/ceba';
import finca from './routes/finca';
import leche from './routes/leche';
import manejo from './routes/manejo';
import pajilla from './routes/pajilla';
import produccion from './routes/produccion';
import sanidad from './routes/sanidad';
import vacuna from './routes/vacuna';
import grupo from './routes/grupo';
import pradera from './routes/praderas';
import movimiento from './routes/movimiento';
import img from './routes/img';
import test from './routes/test';
import cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet
import cors = require('cors');
import reportes from './routes/reportes';

const app: express.Express = express();


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/user', user);
app.use('/api/v1/fincas', finca);
app.use('/api/v1/bovinos', bovino);
app.use('/api/v1/alimentacion', alimentacion);
app.use('/api/v1/sanidad', sanidad);
app.use('/api/v1/manejo', manejo);
app.use('/api/v1/ceba', ceba);
app.use('/api/v1/leche', leche);
app.use('/api/v1/pajillas', pajilla);
app.use('/api/v1/grupos', grupo);
app.use('/api/v1/produccion', produccion);
app.use('/api/v1/vacunas', vacuna);
app.use('/api/v1/praderas', pradera);
app.use('/api/v1/movimientos', movimiento);
app.use('/api/v1/reportes', reportes);
app.use('/api/v1/img', img);
app.use('/api/v1/test', test);
app.get(/.*/, function (req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use((error: any, req, res, next) => {
    res.status(error['status'] || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req, res, next) => {
  res.status(error['status'] || 500);
  res.render('error', {
    message: error.message,
    error: {}
  });
  return null;
});


export default app;