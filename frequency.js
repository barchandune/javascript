const frequency = (nums1, nums2) => {
    for(let i =0; i< nums1.length;i++){
        let currentIndex = nums2.indexOf(nums1[i] ** 2)
        if(currentIndex === -1){
            return false
        }
        nums2.splice(currentIndex,1)
    }
    return true;
}
