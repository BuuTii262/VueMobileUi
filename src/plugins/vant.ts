import { App } from 'vue';

import '@vant/touch-emulator';

import {
  Lazyload,
  Button,
  Image,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Tag,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ActionSheet,
  IndexBar,
  IndexAnchor,
  Loading,
  Col,
  Row,
  Tab,
  Tabs,
  NoticeBar,
  Progress,
  Checkbox,
  Toast,
  Dialog,
  Field,
  Popup,
  Picker,
  Overlay,
  PasswordInput,
  NumberKeyboard,
  CellGroup,
  Divider,
  PullRefresh,
  CollapseItem,
  Collapse,
  Uploader,
  DropdownMenu,
  DropdownItem,
  CountDown,
  Switch,
} from 'vant';
const plugins = [
  Lazyload,
  Button,
  Image,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Tag,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  ActionSheet,
  IndexBar,
  IndexAnchor,
  Loading,
  Col,
  Row,
  Tab,
  Tabs,
  NoticeBar,
  Progress,
  Checkbox,
  Toast,
  Dialog,
  Field,
  Popup,
  Picker,
  Overlay,
  PasswordInput,
  NumberKeyboard,
  CellGroup,
  Divider,
  PullRefresh,
  CollapseItem,
  Collapse,
  Uploader,
  DropdownMenu,
  DropdownItem,
  CountDown,
  Switch,
];

export const vantPlugins = {
  install: function (app: App) {
    plugins.forEach((item: any) => {
      app.component(item.name, item);
    });
  },
};
