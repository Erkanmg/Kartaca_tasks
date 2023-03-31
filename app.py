from flask import Flask, jsonify
import pymongo
from pymongo import MongoClient

app = Flask(__name__)

# client = MongoClient('mongodb://localhost:27018/')
# db = client.stajdb
# iller = db.iller


def get_db():
    client = MongoClient(host='test_mongodb-1',
                         port=27017,
                         username='root',
                         password='pass',
                         authSource="admin")
    db = client["staj_db"]
    return db


@app.route('/')
def hello():
    return 'Merhaba Python!'


# @app.route('/staj')
# def random_il():
#   il = iller.aggregate([{'$sample': {'size': 1}}])
#  return jsonify(il['0'])


@app.route('/staj')
def get_stored_iller():
    db = ""
    try:
        db = get_db()
        _iller = db.staj_tb.find()
        iller = [{"isim": il["isim"], "ilceler": il["ilceler", "ilceler"], "nufus": il["nufus"]}
                 for il in _iller]
        return jsonify({"iller": iller})
    except:
        pass
    finally:
        if type(db) == MongoClient:
            db.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0')
