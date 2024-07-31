/**
 * Mindwm API
 * This document describes the documentation, a collection of JSON schemas and example cloudevent and payloads
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Neo4jChangeDataCaptureSchema model module.
 * @module model/Neo4jChangeDataCaptureSchema
 * @version 0.1.0
 */
class Neo4jChangeDataCaptureSchema {
    /**
     * Constructs a new <code>Neo4jChangeDataCaptureSchema</code>.
     * @alias module:model/Neo4jChangeDataCaptureSchema
     */
    constructor() { 
        
        Neo4jChangeDataCaptureSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Neo4jChangeDataCaptureSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Neo4jChangeDataCaptureSchema} obj Optional instance to populate.
     * @return {module:model/Neo4jChangeDataCaptureSchema} The populated <code>Neo4jChangeDataCaptureSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Neo4jChangeDataCaptureSchema();

            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], {'String': Object});
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Neo4jChangeDataCaptureSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Neo4jChangeDataCaptureSchema</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, Object>} constraints
 */
Neo4jChangeDataCaptureSchema.prototype['constraints'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
Neo4jChangeDataCaptureSchema.prototype['properties'] = undefined;






export default Neo4jChangeDataCaptureSchema;
