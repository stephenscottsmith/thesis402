//
//  FirstViewController.swift
//  Gifter
//
//  Created by Stephen Smith on 2/9/15.
//  Copyright (c) 2015 Stephen Smith. All rights reserved.
//

import UIKit
import Alamofire

class FirstViewController: UIViewController {

    var x : String = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func viewDidAppear(animated: Bool) {
        var err = Alamofire.request(.GET, "http://23.240.186.111:8080/hello")
            .responseJSON { (request, response, JSON, error) in
                println(response)
                println(JSON!)
                let obj : AnyObject = JSON!
                let mes : String =  obj["hello"]! as String!
                var alert = UIAlertController(title: "Alert", message: mes, preferredStyle: UIAlertControllerStyle.Alert)
                alert.addAction(UIAlertAction(title: "Click", style: UIAlertActionStyle.Default, handler: nil))
                self.presentViewController(alert, animated: true, completion: nil)
                
        }
    }
}

