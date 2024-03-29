export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName () {
      return this.user.full_name
    },
    companyName () {
      return this.user.company.name
    },
    companyImage () {
      return this.user.company.image
    },
    hasCompanyImageFiltered () {
      return this.user.company.imageFilter
    },
    photoURL () {
      return this.user.photo
    },
    linkedinURL () {
      const row = this.user.urls.find(url => url.site === 'linkedin')
      return row ? row.url : null
    },
    personalURL () {
      const row = this.user.urls.find(url => url.site === 'personal' || url.site === 'Website')
      return row ? row.url : null
    },
    githubURL () {
      const row = this.user.urls.find(url => url.site === 'github')
      return row ? row.url : null
    }
  }
}
