import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l');
  this.route('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e',
  { path: 'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e/:id' });
  this.route('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e.new',
  { path: 'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e/new' });
  this.route('i-i-s-kursovaya5-клиент-l');
  this.route('i-i-s-kursovaya5-клиент-e',
  { path: 'i-i-s-kursovaya5-клиент-e/:id' });
  this.route('i-i-s-kursovaya5-клиент-e.new',
  { path: 'i-i-s-kursovaya5-клиент-e/new' });
});

export default Router;
