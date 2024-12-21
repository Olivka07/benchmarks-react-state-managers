import { combine, createEvent, createStore } from "effector";
import React from "react";
import { IUser, SubscriptionType } from "../../model/model";
import { CheckboxChangeEvent } from "antd/es/checkbox";

export const resetValues = createEvent('Reset all values')

export const changeName = createEvent<React.ChangeEvent<HTMLInputElement> | string>('Change name')
export const $name = createStore('')
    .on(changeName, (_, payload) => typeof payload === 'string' ? payload : payload.target.value)
    .on(resetValues, () => '')

export const changeAge = createEvent<React.ChangeEvent<HTMLInputElement> | number | null>('Change age')
export const $age = createStore<number | null>(null)
    .on(changeAge, (_, payload) => typeof payload === 'number' ? Number(payload) : (Number(payload?.target.value)))
    .on(resetValues, () => null)

export const changeSub = createEvent<SubscriptionType>('Change subscription')
export const $sub = createStore(SubscriptionType.Subscribed)
    .on(changeSub, (_, payload) => payload)
    .on(resetValues, () => SubscriptionType.Subscribed)

export const changeEmployment = createEvent<CheckboxChangeEvent | boolean>('Change employment')
export const $employed = createStore(false)
    .on(changeEmployment, (_, payload) => typeof payload === 'boolean' ? payload : payload.target.checked)
    .on(resetValues, () => false)
