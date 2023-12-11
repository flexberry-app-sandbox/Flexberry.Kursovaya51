import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya5.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya5.title'),
          children: [{
            link: 'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l',
            caption: i18n.t('forms.application.sitemap.kursovaya5.i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya5.i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kursovaya5-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya5.i-i-s-kursovaya5-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya5.i-i-s-kursovaya5-клиент-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})