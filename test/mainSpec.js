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
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'followers_count' ).is.a( 'Number' ).and.above( 1 );
    });

    it('buildTweetObject has a "friends_count" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'friends_count' ).is.a( 'Number' ).and.above( 1 );
    });

    it('buildTweetObject has a "statuses_count" property', () => {
      expect( helper.buildTweetObject( sampleData[0] ) ).to.have.property( 'statuses_count' ).is.a( 'Number' ).and.above( 1 );
    });
  });
});
