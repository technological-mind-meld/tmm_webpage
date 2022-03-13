<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="container">
        <div class="row footer-row-wrapper">
          <div class="col-12 col-md-3 col-lg-3">
            <!-- Brand -->
            <NuxtLink to="/" title="Go to the home page">
              <img
                class="footer__logo"
                alt="0x4447, LLC."
                src="/public/img/logo_light.svg"
              >
            </NuxtLink>

            <!-- Text -->
            <p class="footer-list__logo-title">
              A solid foundation.
            </p>

            <!--region Social Items-->
            <ul class="footer-list__social">
              <li v-for="social in socialItems" :key="social.link" class="footer-list__social-item">
                <a
                  :href="social.link"
                  target="_blank"
                  class="footer-list__social-link"
                >
                  <img
                    :src="social.image"
                    class="footer-list__social-icon"
                    :alt="`Share on ${social.name}`"
                  >
                </a>
              </li>
            </ul>
            <!--endregion-->
          </div>

          <!--region Menu Items-->
          <div v-for="(menu, $menuIndex) in menuItems" :key="$menuIndex" class="col-4 col-md-3 col-lg-2">
            <!-- Heading -->
            <h6 class="footer-list__title">
              {{ menu.title }}
            </h6>

            <!-- List -->
            <ul class="list-unstyled">
              <li
                v-for="(item, $itemIndex) in menu.children"
                :key="$itemIndex"
                class="footer-list__item"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener nofollow"
                  class="footer-list__item-link"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          <!--endregion-->
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      socialItems: [
        { name: 'Twitter', link: 'https://twitter.com/0x4447', image: '/public/img/social/twitter.svg' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/company/zer0x4447/', image: '/public/img/social/linkedin.svg' }
      ],
      menuItems: [
        {
          title: 'RESOURCES',
          children: [
            { name: 'Training', link: 'https://training.0x4447.com/' },
            { name: 'Support', link: 'https://support.0x4447.com/' },
            { name: 'Feedback', link: 'https://feedback.0x4447.com/' },
            { name: 'Documentation', link: 'https://documentation.0x4447.com/' }
          ]
        },
        {
          title: 'OTHER PRODUCTS',
          children: [
            { name: 'SFTP Server', link: 'https://training.0x4447.com/' },
            { name: 'Samba Server', link: 'https://support.0x4447.com/' },
            { name: 'Rsyslog Server', link: 'https://feedback.0x4447.com/' },
            { name: 'OpenVPN Server', link: 'https://documentation.0x4447.com/' }
          ]
        },
        {
          title: 'ABOUT',
          children: [
            { name: 'Contact', link: 'https://training.0x4447.com/' },
            { name: 'Company', link: 'https://support.0x4447.com/' },
            { name: 'Privacy Policy', link: 'https://feedback.0x4447.com/' },
            { name: 'Terms of Service', link: 'https://documentation.0x4447.com/' }
          ]
        },
        {
          title: 'PROGRAMS',
          children: [
            { name: 'Reseller Program', link: 'https://training.0x4447.com/' },
            { name: 'Test Program', link: 'https://support.0x4447.com/' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  font-family: "HKGroteskPro", sans-serif;

  .footer {
    padding: 60px 0 40px;
    background-color: $bg-gray-200;
    color: $text-muted;

    .footer-list__social {
      display: flex;
      padding-left: 0;
    }

    .footer-row-wrapper {
      @media (max-width: 468px) {
        flex-direction: column;
      }
    }

    .footer-list__social-link {
      &::after {
        content: none;
      }
    }

    .footer-list__social-item {
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }

    .footer__logo {
      width: 200px;
      max-height: 60px;
      margin-bottom: 10px;
    }

    .header-navbar__item-link {
      display: inline-flex;
    }

    .footer-list__item-link {
      display: inline-flex;
      align-items: center;
      color: $text-muted;
    }

    .footer-list__item {
      margin-bottom: 20px;
      font-size: 1.0625rem;
    }

    .footer-list__title {
      margin-bottom: 20px;
      text-transform: uppercase;
      color: $text-gray-700;
      font-size: .75rem;
      letter-spacing: .08em;
      font-weight: 600;
    }

    .footer-list__logo-title {
      color: $text-gray-700;
      font-size: 1.0625rem;
    }
  }
}

.footer-list__item-source {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: initial;
  border-bottom: 1px solid $bg-gray-light;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  .v-list-item {
    min-height: initial;
  }
}
</style>
