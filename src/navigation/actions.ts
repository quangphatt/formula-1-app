import { createRef } from 'react';
import {
  DrawerActions,
  StackActions,
  CommonActions,
  TabActions,
} from '@react-navigation/native';

export const navigationRef = createRef<any>();

export function jumpTo(name: string, params?: any) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(TabActions.jumpTo(name, params));
  }
}

export function navigate(name: string, params?: any) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.navigate(name, params));
  }
}

export function navigatePush(name: string, params?: any) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
}

export function replace(name: string, params?: any) {
  if (navigationRef.current) {
    navigationRef.current.replace(name, params);
  }
}

export function getCurrentRoute() {
  if (navigationRef.current) {
    return navigationRef.current?.getCurrentRoute();
  }
}

export function setParams(params: any) {
  if (navigationRef.current) {
    return navigationRef.current?.setParams(params);
  }
}

export function openDrawer() {
  if (navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  }
}

export function closeDrawer() {
  if (navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.closeDrawer());
  }
}

export function goBack() {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function pop(count: number) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.pop(count));
  }
}

export function popToTop() {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
}
