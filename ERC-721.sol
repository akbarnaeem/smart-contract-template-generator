pragma solidity ^0.8.0;

contract ERC721NFT {
    string public name = "MyNFT";
    string public symbol = "MNFT";
    mapping(uint256 => address) public ownerOf;

    function mint(address to, uint256 tokenId) public {
        ownerOf[tokenId] = to;
    }
}
