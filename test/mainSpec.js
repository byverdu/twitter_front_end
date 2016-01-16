'use strict';

import chai from 'chai';
import Helper from '../helper/helper';
let sampleData = require( './sampleData' )();
let helper = new Helper();
let expect = chai.expect;

// console.log(sampleData[0]);

describe('Global Helper', () => {

  it('Is defined', () => {
    expect( helper ).not.eq(undefined);
  });

  describe('Helper.buildTweetObject', () => {
    it('Helper has a buildTweetObject property', () =>{
      expect( helper ).to.have.property( 'buildTweetObject' ).and.is.a( 'function' );
    });

    it('buildTweetObject returns an Object', () =>{
      expect( helper.buildTweetObject( sampleData[0] ) ).to.be.an( 'Object' );
    });

    it('buildTweetObject has a "text" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'text' ).is.a( 'String' ).and.contains( 'Feature Request: iCloud' );
    });

    it('buildTweetObject has a "name" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'name' ).is.a( 'String' ).and.eq( '9to5Mac ' );
    });

    it('buildTweetObject has a "description" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'description' ).is.a( 'String' ).and.contains( 'Tips@9to5mac.com' );
    });

    it('buildTweetObject has a "screen_name" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'screen_name' ).is.a( 'String' ).and.eq( '9to5mac' );
    });

    it('buildTweetObject has a "profile_image_url" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'profile_image_url' ).is.a( 'String' ).and.contains( 'http://' );
    });

    it('buildTweetObject has a "profile_banner_url" property', () => {
      expect( helper.buildTweetObject( sampleData[1] ) ).to.have.property( 'profile_banner_url' ).is.a( 'String' ).and.contains( 'https://' );
    });

    it('buildTweetObject has a "profile_banner_url" property that returns a default image if banner is not present', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'profile_banner_url' ).is.a( 'String' ).and.contains( 'images/defaultBackground.jpg' );
    });

    it('buildTweetObject has a "followers_count" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'followers_count' ).is.a( 'String' ).and.eq( '320K' );
    });

    it('buildTweetObject has a "friends_count" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'friends_count' ).is.a( 'String' ).and.eq( '13' );
    });

    it('buildTweetObject has a "statuses_count" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'statuses_count' ).is.a( 'String' ).and.eq( '37.8K' );
    });
  });

  describe('Helper.convert4digitNumber', () => {
    let tweetsCount = sampleData[0].user.statuses_count;
    helper.convert4digitNumber = sampleData[2];

    it('Helper has a convert4digitNumber property', () => {
      expect( helper.convert4digitNumber ).to.not.eq( undefined );
    });

    it('convert4digitNumber returns a String', () => {
      expect( helper.convert4digitNumber( tweetsCount ) ).to.be.a( 'String' );
      expect( helper.convert4digitNumber( sampleData[0].user.followers_count ) ).to.be.a( 'String' );
    });

    it('convert4digitNumber accepts a Number as argument', () => {

      function convert4digitNumber( number ) {
        expect( arguments[0] ).to.be.a( 'Number' );
        expect( arguments[1] ).to.eq( undefined );
        return number;
      }

      convert4digitNumber( tweetsCount );
    });

    it('convert4digitNumber converts a 999 into 999 format', () => {
      expect( helper.convert4digitNumber( 999 ) ).to.eq( '999' );
    });

    it('convert4digitNumber converts a 7.500 into 7.5K format', () => {
      expect( helper.convert4digitNumber( 7500 ) ).to.eq( '7.5K' );
    });

    it('convert4digitNumber converts a 37.500 into 37.5K format', () => {
      expect( helper.convert4digitNumber( 37500 ) ).to.eq( '37.5K' );
    });

    it('convert4digitNumber converts a 750.000 into 750K format', () => {
      expect( helper.convert4digitNumber( 750000 ) ).to.eq( '750K' );
    });

    it('convert4digitNumber converts a 1.750.000 into 1.75M format', () => {
      expect( helper.convert4digitNumber( 1750000 ) ).to.eq( '1.75M' );
    });
  });
});
