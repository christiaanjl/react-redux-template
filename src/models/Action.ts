import * as redux from 'redux'

export default interface Action<T>  extends redux.Action<string>{
    readonly type: string
    readonly payload?: T
}
