<template>
  <header
    ref="header"
    :class="[scrollableClass]"
    class="header header--sticky"
  >
    <v-container class="py-0">
      <div class="header-content">
        <NuxtLink :to="{ name: 'index' }" class="logo-header">
          <img
            alt="0x4447, LLC."
            src="/public/img/logo_light.svg"
            class="logo-header-img"
            width="118"
            height="35"
          >
          <span class="header-logo__text">
            a solid foundation
          </span>
        </NuxtLink>

        <div class="header-navbar">
          <ul class="header-navbar__list">
            <li
              v-for="item in menuItems"
              :key="item.name"
              class="header-navbar__item"
            >
              <a :href="item.url" target="_blank" class="header-navbar__item-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
          <div class="header-navbar-mobile">
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-icon
                  large
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ icons.mdiMenu }}
                </v-icon>
              </template>
              <v-list>
                <v-list-item v-for="item in menuItems" :key="item.name">
                  <v-list-item-title v-if="item.isExternal">
                    <a
                      :href="item.url"
                      rel="noopener noreferrer external"
                      target="_blank"
                      class="header-navbar__item-link external-link"
                    >
                      {{ item.name }}
                    </a>
                  </v-list-item-title>
                  <v-list-item-title v-else>
                    <a
                      :href="item.url"
                      class="header-navbar__item-link"
                    >
                      {{ item.name }}
                    </a>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'

export default {
  name: 'TheHeader',
  mixins: [iconMixin],
  data () {
    return {
      menuItems: [
        {
          name: 'RSS',
          url: '/feed.xml'
        }
      ],
      scrollPosition: null
    }
  },
  computed: {
    scrollableClass () {
      return this.scrollPosition > 30 ? 'header--scrollable' : null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss">
.header {
  min-height: 92px;
  z-index: 20;
  padding: 1.25rem 0;
  background-color: $bg-light-200;

  &.header--scrollable {
    box-shadow: 0 -5px 10px  $black;
    transition: .3s;
  }

  &.header--sticky {
    position: sticky;
    top: 0;
  }

  .header-content {
    display: flex;
    align-items: center;
    flex-wrap: initial;
    width: 100%;
    min-height: 52px;
    justify-content: space-between;
  }

  .logo-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 118px;
    min-width: 118px;

    @media (max-width: 968px) {
      margin: 0 auto;
    }
  }

  .logo-header-img {
    max-width: 100%;
  }

  .header-logo__text {
    font-size: 12px;
    color: $text-muted;
  }

  .header-button__icon {
    width: 20px;
    height: 17px;
    margin-right: 5px;
  }

  .header-button {
    margin-right: auto;
    margin-left: 60px;
    font-weight: 600;
    letter-spacing: 0;
    font-size: 1.0625rem !important;
    border-radius: 0.375rem;
    background-color: $yellow-text;
    color: $black;

    &:hover {
      background-color: $yellow-text-dark;
    }
  }

  .header-navbar__list {
    display: flex;
    align-items: center;

    @media (max-width: 968px) {
      display: none;
    }
  }

  .header-navbar-mobile {
    display: none;

    @media (max-width: 968px) {
      display: block;
    }
  }

  .header-navbar {
    display: flex;
    justify-content: space-between;

    @media (max-width: 968px) {
      position: absolute;
      right: 20px;
      margin-left: inherit;
    }
  }

  .header-navbar__item {
    margin: 0 0.6rem;
    list-style: none;
    font-size: 1.0625rem;
    font-weight: 600;

    .header-navbar__item-link {
      color: $text-gray-700;

      &:hover,
      &.is-active {
        color: $hover-link;
      }
    }
  }
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-active {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 0.1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
