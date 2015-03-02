import DS from 'ember-data';

export default DS.Model.extend({
  etiqueta: DS.attr('string'),
  path: DS.attr('string')
});
