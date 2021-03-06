import { observable } from 'mobx';
import Client         from '_common/base/client_base';
import BaseStore      from './base_store';

export default class ClientStore extends BaseStore {
    @observable balance;
    @observable is_logged_in = !!Client.isLoggedIn();
    @observable loginid      = Client.get('loginid');
    @observable currency     = Client.get('currency') || '';
    @observable upgrade_info = Client.getBasicUpgradeInfo();
    @observable can_upgrade  = this.upgrade_info.can_upgrade || this.upgrade_info.can_open_multi;
}
