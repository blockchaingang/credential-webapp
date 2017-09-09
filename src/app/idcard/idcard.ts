export class IDCard {

  static fromJSON(json) {
    return new IDCard(
      json.firstName,
      json.lastName,
      json.email,
      json.participantType,
      json.businessNetwork,
      json.userID,
      json.userSecret
    );
  }

  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public participantType: string,
              public businessNetwork: string,
              public userID: string,
              public userSecret: string) {
  }

  save(name: string) {
    localStorage.setItem(name, JSON.stringify(this));
    let walletList = localStorage.get('WalletList');
    if (walletList == null) {
      walletList = [];
    }
    walletList.push(name);
    localStorage.setItem('WalletList', JSON.stringify(walletList));
  }

}
