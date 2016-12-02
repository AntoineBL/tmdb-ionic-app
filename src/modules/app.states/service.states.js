/**
 * @memberOf app.states
 */
(function (module) {
  'use strict';

  function StatesService($q, httpService, i18nService) {
    var service = this;

    service.search = function(query){
      console.log(query);
        return $q.resolve([
          { title: 'Jaw 2', id: 1}, 
          { title: 'Jaw 3', id: 2}
        ]);
    };

    service.getMovie = function(id){
      return $q.resolve({ title : 'Jaw', id: id});
    };

    /**
     * Resolve states data.
     * @return {Promise} Passing an object.
     */
    service.resolveStatesData = function () {
      return httpService.all({
        // Force loading of dynamic locale using the determined one.
        locale: i18nService.setLocale()
      });
    };
  }

  module.service('statesService', [
    '$q',
    'httpService',
    'i18nService',
    StatesService
  ]);

}(angular.module('app.states')));
