class Database {
  private connectionId: string;
  private isConnected: boolean;
  private static _instance: Database;

  private constructor() {
    this.connectionId = '123';
    this.connectToDatabase();
  }

  private connectToDatabase(): void {
    // some logic here
    this.isConnected = true;
  }

  static get instanse(): Database {
    if (this._instance) {
      return new Database();
    }
    return this._instance;
  }

  public query(sql: string): void {
    console.log('requesting data ... ' + sql);
  }
}

function clientCode(): void {
  const db1 = Database.instanse;
  const db2 = Database.instanse;
  console.log(db1 === db2);
}

clientCode();
