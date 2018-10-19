pragma solidity ^ 0.4.21;

contract Store{
    mapping(string => string) archive;
    function store(string day, string txs) public returns (string) {
        archive[day] = txs;
        return archive[day];
    }
    function read(string day) public view returns (string) {
        return archive[day];
    }
}

