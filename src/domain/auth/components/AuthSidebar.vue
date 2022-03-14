<template>
    <nav style="min-width: 190px;" class="sidenav sidenav--basic padding-y-sm">
        <ul class="sidenav__list margin-bottom-sm">
            <li class="sidenav__item sidenav__item--expanded">
                <router-link :to="{ name: 'properties' }" class="sidenav__link">
                    <!-- <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="#212121" stroke="#212121" stroke-miterlimit="10"><polygon fill="none" stroke="#212121" points="2,7 12,1 22,7 12,13 "></polygon> <polyline data-color="color-2" fill="none" points=" 22,12 12,18 2,12 "></polyline> <polyline data-color="color-2" fill="none" points=" 22,17 12,23 2,17 "></polyline></g></svg> -->
                    <span class="sidenav__text">Properties</span>
                </router-link>
            </li>
            
            <li class="sidenav__item sidenav__item--expanded">
                <router-link :to="{ name: 'people' }" class="sidenav__link">
                    <!-- <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="#212121" stroke="#212121" stroke-miterlimit="10"><polygon fill="none" stroke="#212121" points="2,7 12,1 22,7 12,13 "></polygon> <polyline data-color="color-2" fill="none" points=" 22,12 12,18 2,12 "></polyline> <polyline data-color="color-2" fill="none" points=" 22,17 12,23 2,17 "></polyline></g></svg> -->
                    <span class="sidenav__text">People</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup></script>

<style lang="scss">
:root {
  /* List items */
  /* Height of each list item (navigation links) */
  --sidenav-list-item-height: 38px;
  /* Item horizontal padding */
  --sidenav-list-item-padding-x: var(--space-md);

  /* Icons */
  /* Size of main link icons */
  --sidenav-icon-size: 18px;
  /* Gap between main icon and text label */
  --sidenav-icon-text-gap: 10px;
}

.sidenav {}

.sidenav__list .sidenav__list { // sublist
  display: none; // hide sublist

  .sidenav__link { // sublink
    padding-left: calc(
        var(--sidenav-list-item-padding-x) + 
        var(--sidenav-sublist-control-size) + 
        var(--sidenav-sublist-control-margin-right) + 
        var(--sidenav-icon-size) + 
        var(--sidenav-icon-text-gap)
    );
  }
}

.sidenav__item {
  position: relative;
}

.sidenav__link {
  display: flex;
  align-items: center;
  height: var(--sidenav-list-item-height);
  margin-bottom: var(--space-xxxs);
  padding-left: var(--nested-menu-list-item-padding-x);
  text-decoration: none;
  color: var(--color-contrast-high);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  transition: .2s;

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.05);
    color: var(--color-primary);

    svg * {
        stroke: var(--color-primary);
    }
  }
}

.sidenav__link[aria-current="page"],
.sidenav__link--current {
  background-color: alpha(var(--color-primary), 0.1);
  color: var(--color-primary);

  svg * {
      stroke: var(--color-primary);
  }
}

.sidenav__icon { // main item icons
  width: var(--sidenav-icon-size);
  height: var(--sidenav-icon-size);
  margin-right: var(--sidenav-icon-text-gap);
}

.sidenav__text { // link labels
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-xxs);
}

.sidenav__counter {
  display: inline-block;
  background-color: alpha(var(--color-contrast-higher), 0.15);
  color: var(--color-contrast-high);
  font-size: var(--text-xs);
  padding: var(--space-xxxxs) var(--space-xxs);
  border-radius: 50em;
  margin-left: auto;
}

.sidenav__label {
  padding-left: var(--sidenav-list-item-padding-x);
}

.sidenav__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-contrast-lower);
}

// --basic -> no sublists
.sidenav--basic {
  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }
}

// --minified
.sidenav--minified {
  --sidenav-list-item-height: auto;

  .sidenav__list .sidenav__list {
    display: none !important; // hide sublists
  }

  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }

  .sidenav__link {
    flex-direction: column;
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
  }

  .sidenav__icon {
    margin: 0 0 var(--sidenav-icon-text-gap);
  }

  .sidenav__text {
    padding: 0; // reset
  }

  .sidenav__counter, .sidenav__sublist-control {
    display: none; // hide counter and arrow icon
  }
}
</style>
