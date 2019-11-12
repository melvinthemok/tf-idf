import json
import math

def update(result, message):
    result['isComplete'] = False
    result['jsonFeedback']['status'] = 'failure'
    result['jsonFeedback']['reason'] = message
    result['htmlFeedback'] = '<div>{}</div>'.format(message)
    result['textFeedback'] = message

def evaluate(editable, hidden, result):
    try:
        exec(editable)
    except SyntaxError as err:
        update(result, "Please ensure that the code around '{}' in your function conforms with Python syntax".format(err.args[1][3].strip()))
    else:
        try:
            for case in hidden['test_cases']:
                if hidden['test_query']:
                    assert type(eval("{}(hidden['test_query'], case)".format(hidden['function_name']))) == eval(hidden['function_return_type']), 'Please check that your function returns a {}.'.format(hidden['function_return_type'])
                    assert eval("{}(hidden['test_query'], case)".format(hidden['function_name'])) == hidden['test_cases'][case], 'Your function computed an incorrect value: {}, but the correct value is: {}'.format(eval("{}(hidden['test_query'], case)".format(hidden['function_name'])), hidden['test_cases'][case])        
                else:
                    assert type(eval('{}(case)'.format(hidden['function_name']))) == eval(hidden['function_return_type']), 'Please check that your function returns a {}.'.format(hidden['function_return_type'])
                    assert eval('{}(case)'.format(hidden['function_name'])) == hidden['test_cases'][case], 'Your function computed an incorrect value: {}, but the correct value is: {}'.format(eval('{}(case)'.format(hidden['function_name'])), hidden['test_cases'][case])
        except NameError as err:
            if err.args[0] == "name '{}' is not defined".format(hidden['function_name']):
                update(result, "Please ensure that your function is named '{}'".format(hidden['function_name']))
        except AttributeError as err:
            update(result, 'Please avoid referencing non-existent attributes: {}'.format(err.args[0]))
        except KeyError as err:
            update(result, "Please avoid referencing dict key '{}' as it does not exist".format(err.args[0]))
        except RecursionError as err:
            update(result, "You're in too deep with your function: {}".format(err.args[0]))
        except AssertionError as err:
            update(result, err.args[0])
        except Exception as err:
            update(result, 'Oops - an unexpected error occurred: {}'.format(err.args[0]))
    finally:
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": True,
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "isComplete": result["isComplete"],
                "jsonFeedback": result["jsonFeedback"],
                "htmlFeedback": result["htmlFeedback"],
                "textFeedback": result["textFeedback"]
            })
        }

def lambda_handler(event, context):
    method = event.get('httpMethod', {})
    if method == 'GET':
        return {
            "statusCode": 301,
            "headers": {
                'Location': 'https://d21ru4jeqbismr.cloudfront.net/'
            }
        }
    if method == 'POST':
        postReq = json.loads(event.get('body', {}))
        editable = postReq["editable"]["0"].strip()
        hidden = json.loads(postReq["hidden"]["0"].strip())
        
        result = {
            "isComplete": True if editable else False,
            "jsonFeedback": { "status": "success", "reason": "Well done!" },
            "htmlFeedback": "<html><body><div>{}</div></body></html>".format("Success!"),
            "textFeedback": "Success!"
        }
        
        return evaluate(editable, hidden, result)
