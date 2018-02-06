const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'jan',
      room: 'workHard'
    }, {
      id: '2',
      name: 'feb',
      room: 'workSmart'
  }, {
    id: '3',
    name: 'mar',
    room: 'workHard'
  }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Vivek',
      room: 'workHard'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
     var userId = '1';

     var user = users.removeUser(userId);

     expect(user.id).toBe(userId);
     expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '5';

    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
     var userId = '2';
     var user = users.getUser(userId);

     expect(user.id).toEqual(userId);
  });

  it('should not not find a user', () => {
    var user = users.getUser('6');

    expect(user).toNotExist();
  });

  it('should return name for workHard', () => {
    var userList = users.getUserList('workHard');

    expect(userList).toEqual(['jan', 'mar']);
  });

  it('should return name for workSmart', () => {
    var userList = users.getUserList('workSmart');

    expect(userList).toEqual(['feb']);
  });
});
