let _configs = require('../../config/preferences');
import * as utils from './index'
import { regexText } from './regex';

function getIsActiveItem(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    //return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
};

async function getDanhSachPhanCapDonVi(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    // return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let { account } = req.tokenObj.usr
    let rhApiUrl = _configs.rh.dataUrl + "/tbUsers?filter={account:'" + account + "'}";
    let DonVi = await utils.Axios('get', rhApiUrl)
      .then(function (rhApiRes) {
        return rhApiRes.data._embedded[0].DonVi
      }).catch(function (rhApiErr) {
        return null
      })

    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter['isActive'] = true
      filter['codeTree'] = regexText(DonVi.codeTree)
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true, codeTree: regexText(DonVi.codeTree || '') }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
}

async function getDanhSachPhanCapNhomDanhMuc(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    // return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let { account } = req.tokenObj.usr
    let rhApiUrl = _configs.rh.dataUrl + "/tbUsers?filter={account:'" + account + "'}";
    let DonVi = await utils.Axios('get', rhApiUrl)
      .then(function (rhApiRes) {
        return rhApiRes.data._embedded[0].DonVi
      }).catch(function (rhApiErr) {
        return null
      })

    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter['isActive'] = true
      filter['DonViCha.codeTree'] = regexText(DonVi.codeTree)
      // filter['codeTree'] = regexText(DonVi.codeTree)
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true, 'DonViCha.codeTree': regexText(DonVi.codeTree || '') }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
}

async function getDanhSachPhanCapDanhMuc(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    // return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let { account } = req.tokenObj.usr
    let rhApiUrl = _configs.rh.dataUrl + "/tbUsers?filter={account:'" + account + "'}";
    let DonVi = await utils.Axios('get', rhApiUrl)
      .then(function (rhApiRes) {
        return rhApiRes.data._embedded[0].DonVi
      }).catch(function (rhApiErr) {
        return null
      })

    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter['isActive'] = true
      filter['DonViCha.codeTree'] = regexText(DonVi.codeTree)
      // filter['codeTree'] = regexText(DonVi.codeTree)
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true, 'DonViCha.codeTree': regexText(DonVi.codeTree || '') }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
}

async function getDanhSachPhanCapLinhVuc(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    // return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let { account } = req.tokenObj.usr
    let rhApiUrl = _configs.rh.dataUrl + "/tbUsers?filter={account:'" + account + "'}";
    let DonVi = await utils.Axios('get', rhApiUrl)
      .then(function (rhApiRes) {
        return rhApiRes.data._embedded[0].DonVi
      }).catch(function (rhApiErr) {
        return null
      })

    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter['isActive'] = true
      filter['DonViCha.codeTree'] = regexText(DonVi.codeTree)
      // filter['codeTree'] = regexText(DonVi.codeTree)
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true, 'DonViCha.codeTree': regexText(DonVi.codeTree || '') }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
}

async function getDanhSachPhanCapUser(req) {
  if (!!req.tokenObj && !!req.tokenObj.roles && req.tokenObj.roles === _configs.super.roles) {
    // return req.url
    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter.isActive = true
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  } else {
    let { account } = req.tokenObj.usr
    let rhApiUrl = _configs.rh.dataUrl + "/tbUsers?filter={account:'" + account + "'}";
    let DonVi = await utils.Axios('get', rhApiUrl)
      .then(function (rhApiRes) {
        return rhApiRes.data._embedded[0].DonVi
      }).catch(function (rhApiErr) {
        return null
      })

    let query = req.url.replace('/?', '');
    query = new URLSearchParams(query)
    let filter = query.get('filter')
    let count = query.get('count')
    if (!count) return req.url
    if (filter) {
      filter = JSON.parse(filter)
      filter['isActive'] = true
      filter['DonVi.codeTree'] = regexText(DonVi.codeTree)
      // filter['codeTree'] = regexText(DonVi.codeTree)
      query.set('filter', JSON.stringify(filter))
    } else {
      filter = { isActive: true, 'DonVi.codeTree': regexText(DonVi.codeTree || '') }
      query.set('filter', JSON.stringify(filter))
    }
    query = '/?' + query
    return query
  }
}

async function updateMulti(table, filter, data) {
  let rhApiUrl = _configs.rh.dataUrl + "/" + table + "/*?filter=" + JSON.stringify(filter);
  let apiRes = await utils.Axios('patch', rhApiUrl, data)
    .then(function (rhApiRes) {
      return true
    }).catch(function (rhApiErr) {
      return false
    })
  return apiRes
}

async function checkIsExisted(table, key, value) {
  let rhApiUrl = _configs.rh.dataUrl + "/" + table + "?filter={isActive : true," + key + ":'" + value + "'}";;
  let apiRes = await utils.Axios('get', rhApiUrl)
    .then(function (rhApiRes) {
      return rhApiRes.data._embedded[0]
    }).catch(function (rhApiErr) {
      return false
    })
  return !!apiRes
}

function getDanhMucPublicItem(req) {
  let query = req.url.replace('/?', '');
  query = new URLSearchParams(query)
  let filter = query.get('filter')
  let keys = query.get('keys')
  let count = query.get('count')
  if (!count) return req.url

  if (filter) {
    filter = JSON.parse(filter)
    filter.isActive = true
    query.set('filter', JSON.stringify(filter))
  } else {
    filter = { isActive: true }
    query.set('filter', JSON.stringify(filter))
  }
  if (keys) {
    keys = JSON.parse(keys)
    keys.DonViCha = 0
    keys.LinhVuc = 0
    keys.LoaiDanhMuc = 0
    keys.NhomDanhMuc = 0
    keys.Cap = 0
    keys.KichHoat = 0
    keys.code = 0
    keys.createdAt = 0
    keys.createdBy = 0
    keys.isActive = 0
    keys.modifiedAt = 0
    keys.modifiedBy = 0
    keys.PheDuyet = 0
  } else {
    keys = {
      DonViCha: 0, LinhVuc: 0, LoaiDanhMuc: 0, NhomDanhMuc: 0,
      Cap: 0, KichHoat: 0, code: 0, createdAt: 0, createdBy: 0, isActive: 0, modifiedAt: 0, modifiedBy: 0, PheDuyet: 0
    }
    query.set('keys', JSON.stringify(keys))
  }
  query = '/?' + query
  return query
};

function getLinhVucPublicItem(req) {
  let query = req.url.replace('/?', '');
  query = new URLSearchParams(query)
  let filter = query.get('filter')
  let keys = query.get('keys')
  let count = query.get('count')
  if (!count) return req.url

  if (filter) {
    filter = JSON.parse(filter)
    filter.isActive = true
    query.set('filter', JSON.stringify(filter))
  } else {
    filter = { isActive: true }
    query.set('filter', JSON.stringify(filter))
  }
  if (keys) {
    keys = JSON.parse(keys)
    keys.DonViCha = 0
    keys.LinhVucCha = 0
    keys.Cap = 0
    keys.KichHoat = 0
    keys.code = 0
    keys.createdAt = 0
    keys.createdBy = 0
    keys.isActive = 0
    keys.modifiedAt = 0
    keys.modifiedBy = 0
  } else {
    keys = {
      DonViCha: 0, LinhVucCha: 0,
      Cap: 0, KichHoat: 0, code: 0, createdAt: 0, createdBy: 0, isActive: 0, modifiedAt: 0, modifiedBy: 0
    }
    query.set('keys', JSON.stringify(keys))
  }
  query = '/?' + query
  return query
};

function getLoaiDanhMucPublicItem(req) {
  let query = req.url.replace('/?', '');
  query = new URLSearchParams(query)
  let filter = query.get('filter')
  let keys = query.get('keys')
  let count = query.get('count')
  if (!count) return req.url

  if (filter) {
    filter = JSON.parse(filter)
    filter.isActive = true
    query.set('filter', JSON.stringify(filter))
  } else {
    filter = { isActive: true }
    query.set('filter', JSON.stringify(filter))
  }
  if (keys) {
    keys = JSON.parse(keys)
    keys.KichHoat = 0
    keys.code = 0
    keys.createdAt = 0
    keys.createdBy = 0
    keys.modifiedAt = 0
    keys.modifiedBy = 0
    keys.isActive = 0
  } else {
    keys = {
      KichHoat: 0, code: 0, createdAt: 0, createdBy: 0, modifiedAt: 0, modifiedBy: 0, isActive: 0
    }
    query.set('keys', JSON.stringify(keys))
  }
  query = '/?' + query
  return query
};

function getNhomDanhMucPublicItem(req) {
  let query = req.url.replace('/?', '');
  query = new URLSearchParams(query)
  let filter = query.get('filter')
  let keys = query.get('keys')
  let count = query.get('count')
  if (!count) return req.url

  if (filter) {
    filter = JSON.parse(filter)
    filter.isActive = true
    query.set('filter', JSON.stringify(filter))
  } else {
    filter = { isActive: true }
    query.set('filter', JSON.stringify(filter))
  }
  if (keys) {
    keys = JSON.parse(keys)
    keys.NhomDanhMucCha = 0
    keys.KichHoat = 0
    keys.code = 0
    keys.createdAt = 0
    keys.createdBy = 0
    keys.modifiedAt = 0
    keys.modifiedBy = 0
    keys.isActive = 0
    keys.codeTree = 0
  } else {
    keys = {
      NhomDanhMucCha: 0,
      KichHoat: 0, code: 0, createdAt: 0, createdBy: 0, modifiedAt: 0, modifiedBy: 0, isActive: 0, codeTree: 0
    }
    query.set('keys', JSON.stringify(keys))
  }
  query = '/?' + query
  return query
};

function getThuocTinhDanhMucPublicItem(req) {
  let query = req.url.replace('/?', '');
  query = new URLSearchParams(query)
  let filter = query.get('filter')
  let keys = query.get('keys')
  let count = query.get('count')
  if (!count) return req.url

  if (filter) {
    filter = JSON.parse(filter)
    filter.isActive = true
    query.set('filter', JSON.stringify(filter))
  } else {
    filter = { isActive: true }
    query.set('filter', JSON.stringify(filter))
  }
  if (keys) {
    keys = JSON.parse(keys)
    keys.KichHoat = 0
    keys.code = 0
    keys.createdAt = 0
    keys.createdBy = 0
    keys.modifiedAt = 0
    keys.modifiedBy = 0
    keys.isActive = 0
  } else {
    keys = {
      KichHoat: 0, code: 0, createdAt: 0, createdBy: 0, modifiedAt: 0, modifiedBy: 0, isActive: 0
    }
    query.set('keys', JSON.stringify(keys))
  }
  query = '/?' + query
  return query
};
export {
  getIsActiveItem, getDanhSachPhanCapDonVi, getDanhSachPhanCapNhomDanhMuc, getDanhSachPhanCapDanhMuc,
  getDanhSachPhanCapLinhVuc, getDanhSachPhanCapUser, checkIsExisted, updateMulti,
  // PUBLIC
  getDanhMucPublicItem,
  getLinhVucPublicItem,
  getLoaiDanhMucPublicItem,
  getNhomDanhMucPublicItem,
  getThuocTinhDanhMucPublicItem
}