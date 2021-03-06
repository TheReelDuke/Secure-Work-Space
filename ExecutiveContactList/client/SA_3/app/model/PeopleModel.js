/*
 * File: app/model/PeopleModel.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.PeopleModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'group',
                type: 'string'
            },
            {
                name: 'firstname',
                type: 'string'
            },
            {
                name: 'middlename',
                type: 'string'
            },
            {
                name: 'lastname',
                type: 'string'
            },
            {
                name: 'position',
                type: 'string'
            },
            {
                name: 'photo_url',
                type: 'string'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'location',
                type: 'string'
            },
            {
                name: 'twitter',
                type: 'string'
            },
            {
                name: 'workphone',
                type: 'string'
            },
            {
                name: 'blackberry',
                type: 'string'
            },
            {
                name: 'bbmpin',
                type: 'string'
            }
        ]
    }
});