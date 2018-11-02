import {combineReducers} from 'redux';
import data from './data';
import date from './date';
import listVisibility from './listVisibility';
import cardsQuantity from './cardsQuantity';
import monthNames from './monthNames';
import imageSize from './imageSize';

export default combineReducers({
    data,
    date,
    listVisibility,
    cardsQuantity,
    monthNames,
    imageSize
})