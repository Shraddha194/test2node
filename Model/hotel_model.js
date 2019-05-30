var db = require('../dbconnection');
var hotel = {
    getAllHotel: function (callback) {
        return db.query("select * from hotel", callback);
    },
    getHotelById: function (id, callback) {
        return db.query("select * from hotel where hotel_id=?", [id], callback);
    },
    addHotel: function (item, callback) {

        return db.query("insert into hotel values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [item.hotel_id, item.hotel_name, item.owner_name, item.contact_no,
            item.email, item.star_category, item.group_name, item.copyright_by,
            item.ownership_type, item.address, item.landmark, item.pincode,
            item.city, item.state, item.country, item.website, item.pfirstname,
            item.plastname, item.pdesignation, item.pemail, item.pcontact_no,
            item.package_type, item.pay_charge, item.package_name, item.valid_form,
            item.valid_to, item.days], callback);
    },
    deleteHotel: function (id, callback) {
        return db.query("delete from hotel where hotel_id=?", [id], callback);
    },
    deleteAllHotel: function (item, callback) {
        var arrdelete = [];

        for (i = 0; i < item.length; i++) {
            arrdelete[i] = item[i].hotel_id;
            console.log(arrdelete[i]);
        }
        return db.query("delete from hotel where hotel_id in (?)", [arrdelete], callback);
    },
    updateHotel: function (id, item, callback) {
        return db.query("update hotel set hotel_name=?,owner_name=?,contact_no=?,email=?,star_category=?,group_name=?,copyright_by=?,ownership_type=?,address=?,landmark=?,pincode=?,city=?,state=?,country=?,website=?,pfirstname=?,plastname=?,pdesignation=?,pemail=?,pcontact_no=?,package_type=?,pay_charge=?,package_name=?,valid_form=?,valid_to=?,days=? where hotel_id=?",
            [item.hotel_name, item.owner_name, item.contact_no,
            item.email, item.star_category, item.group_name, item.copyright_by,
            item.ownership_type, item.address, item.landmark, item.pincode,
            item.city, item.state, item.country, item.website, item.pfirstname,
            item.plastname, item.pdesignation, item.pemail, item.pcontact_no,
            item.package_type, item.pay_charge, item.package_name, item.valid_form,
            item.valid_to, item.days, id], callback);
    }
}
module.exports = hotel;